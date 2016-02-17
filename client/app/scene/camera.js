import {
  PerspectiveCamera
} from 'three';

function newCamera(Camera, { viewAngle, aspectRatio, near, far }){
  return new Camera(viewAngle, aspectRatio, near, far);
}

export function createCamera() {
  const camera = newCamera(PerspectiveCamera, {
    viewAngle: 75,
    aspectRatio: window.innerWidth / window.innerHeight,
    near: 1,
    far: 2000
  });
  
  camera.position.set(0, 0, 0)

  return camera
}
