import { Scene, WebGLRenderer, Fog, PointLight, AmbientLight, Object3D, Clock } from 'three'
import { createCamera } from './camera'
import { createRoom } from './room'
import { createPlayer } from './player'
import FlyControls from './flyControls'
import key from 'keymaster'

export function createScene() {
  const scene = new Scene()
  const camera = createCamera()

  const clock = new Clock()

  const light = new AmbientLight( 0x252525 ) // soft white light
  scene.add( light )

  const player = createPlayer()

  scene.add(player)

  const lightOne = new PointLight(0x336699, 10, 200)
  lightOne.position.set(0, 0, -20)
  scene.add(lightOne)

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
  onWindowResize()


  const dummy = new Object3D()
  const controls = new FlyControls(dummy)

  controls.movementSpeed = 100
  controls.domElement = container
  controls.rollSpeed = Math.PI / 3
  controls.autoForward = false
  controls.dragToLook = true
  controls.predicate = arg => true

  scene.add(dummy)
  dummy.add(camera)

  animate()
  let start = new Date()
  let delta = 0

  function animate() {
    requestAnimationFrame(animate)

    delta = clock.getDelta()
    let current = new Date()
    let elapsed = current - start

    render()
  }

  function render() {
    controls.update(delta)

    renderer.render(scene, camera)
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
}
