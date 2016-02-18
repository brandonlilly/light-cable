import { Scene, WebGLRenderer, Fog, PointLight, AmbientLight, Object3D, Clock } from 'three'
import { createCamera } from './camera'
import { createRoom } from './room'
import User from '../user'

export function createScene() {
  const scene = new Scene()
  const camera = createCamera()

  const clock = new Clock()
  scene.add(new AmbientLight(0x252525))

  const room = createRoom()
  scene.add(room)

  const renderer = new WebGLRenderer({
    antialiasing: true,
    precision: "highp",
    stencil: true,
    preserveDrawingBuffer: true,
    alpha: true,
  })

  const container = document.getElementById("scene")
  container.appendChild(renderer.domElement)
  window.addEventListener('resize', onWindowResize, true)

  const user = new User({ camera, container })
  scene.add(user.object)
  let delta = 0

  function animate() {
    requestAnimationFrame(animate)
    render()
  }

  function render() {
    delta = clock.getDelta()
    user.update(delta)

    renderer.render(scene, camera)
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  onWindowResize()
  animate()

  return { scene, user }
}
