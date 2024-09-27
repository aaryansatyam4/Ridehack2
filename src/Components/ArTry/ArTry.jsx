import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import './ArTry.css';
import * as posenet from '@tensorflow-models/posenet';
import * as tf from '@tensorflow/tfjs'; // Import TensorFlow.js
import t1 from '../Assets/t1.jpg';
import t2 from '../Assets/t2.png';

const ArTry = () => {
  const [selectedTshirt, setSelectedTshirt] = useState(null);
  const [leftShoulder, setLeftShoulder] = useState(null);
  const [rightShoulder, setRightShoulder] = useState(null);
  const [isPoseNetLoaded, setIsPoseNetLoaded] = useState(false);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Array of T-shirt images
  const tshirtOptions = [t1, t2];

  useEffect(() => {
    const loadPosenet = async () => {
      // Set TensorFlow.js backend explicitly
      await tf.setBackend('webgl'); // Or 'cpu' if WebGL isn't supported
      await tf.ready(); // Ensure TensorFlow.js is ready

      // Check if WebGL is being used
      const isWebGLSupported = tf.backend().name === 'webgl';
      console.log('Is WebGL supported? ', isWebGLSupported);

      // Load PoseNet model
      const net = await posenet.load();
      setIsPoseNetLoaded(true);

      // Pose detection at intervals
      setInterval(() => {
        detect(net);
      }, 100);
    };

    const detect = async (net) => {
      // Ensure the webcam is ready
      if (
        typeof webcamRef.current !== 'undefined' &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        const video = webcamRef.current.video;
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        // Perform pose estimation
        const pose = await net.estimateSinglePose(video, {
          flipHorizontal: false,
        });

        // Debug: Log the detected pose keypoints to see if PoseNet is working
        console.log('PoseNet Keypoints:', pose.keypoints);

        drawCanvas(pose, videoWidth, videoHeight, canvasRef);

        if (pose && pose.keypoints) {
          const leftShoulderPoint = pose.keypoints.find(
            (point) => point.part === 'leftShoulder'
          );
          const rightShoulderPoint = pose.keypoints.find(
            (point) => point.part === 'rightShoulder'
          );

          if (leftShoulderPoint && rightShoulderPoint) {
            setLeftShoulder(leftShoulderPoint.position);
            setRightShoulder(rightShoulderPoint.position);
          }
        }
      }
    };

    loadPosenet();
  }, []);

  const drawCanvas = (pose, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext('2d');
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    ctx.clearRect(0, 0, videoWidth, videoHeight); // Clear previous drawings

    // Draw Red Dots for shoulders
    pose.keypoints.forEach((keypoint) => {
      if (keypoint.part === 'leftShoulder' || keypoint.part === 'rightShoulder') {
        const { y, x } = keypoint.position;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI); // Draw a bigger circle at the keypoint for better visibility
        ctx.fillStyle = 'red'; // Red color for the dot
        ctx.fill();
      }
    });
  };

  const calculateTshirtPosition = () => {
    if (!leftShoulder || !rightShoulder || !webcamRef.current) return {};

    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Calculate the top and left based on shoulder positions
    let top = (leftShoulder.y + rightShoulder.y) / 2 - 50;
    let left = (leftShoulder.x + rightShoulder.x) / 2 - 150;

    // Width of the T-shirt based on shoulder distance
    const width = Math.abs(leftShoulder.x - rightShoulder.x) + 100;

    // Constrain top and left to not exceed the webcam feed bounds
    if (top < 0) top = 0;
    if (left < 0) left = 0;
    if (top + width > videoHeight) top = videoHeight - width;
    if (left + width > videoWidth) left = videoWidth - width;

    return { top, left, width };
  };

  return (
    <div className="artry-container">
      <h1>Virtual T-Shirt Try-On</h1>

      <div className="camera-container">
        {/* Webcam Component */}
        <Webcam ref={webcamRef} className="webcam" videoConstraints={{ facingMode: 'user' }} />

        {/* Canvas for drawing red dots */}
        <canvas ref={canvasRef} className="pose-canvas" />

        {/* Debug message */}
        {!isPoseNetLoaded && <p>Loading PoseNet...</p>}

        {/* T-Shirt Overlay */}
        {selectedTshirt && leftShoulder && rightShoulder && (
          <img
            src={selectedTshirt}
            alt="Selected T-shirt"
            className="tshirt-overlay"
            style={{
              position: 'absolute',
              ...calculateTshirtPosition(),
              clipPath: 'inset(0px)', // Ensures T-shirt doesn't exceed the webcam feed
            }}
          />
        )}
      </div>

      <div className="tshirt-selection">
        <h2>Select a T-shirt</h2>
        <div className="tshirt-options">
          {tshirtOptions.map((tshirt, index) => (
            <img
              key={index}
              src={tshirt}
              alt={`Tshirt ${index + 1}`}
              className="tshirt-thumbnail"
              onClick={() => setSelectedTshirt(tshirt)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArTry;
