import { Object3D } from 'three'
import FlyControls from './scene/flyControls'

class User {
  constructor({ camera, container }) {
    const object = new Object3D()
    const controls = new FlyControls(object)

    controls.movementSpeed = 100
    controls.domElement = container
    controls.rollSpeed = Math.PI / 3
    controls.autoForward = false
    controls.dragToLook = true
    controls.predicate = arg => (
      document.activeElement != document.getElementById('messageInput')
    )

    object.add(camera)

    this.object = object
    this.controls = controls
    this.coords = { x: 0, y: 0, z: 0 }
  }

  update(delta) {
    this.controls.update(delta)

    if (this.coordinatesChanged()) {
      this.coords = { x: this.object.position.x, y: this.object.position.y, z: this.object.position.z }
      if (App) {
        App.channel.set_position(this.coords)
      }
    }
  }

  sendPosition() {
    App.channel.set_position(this.coords)
  }

  coordinatesChanged() {
    return this.coords.x != this.object.position.x ||
      this.coords.y != this.object.position.y ||
      this.coords.z != this.object.position.z
  }
}

export default User
