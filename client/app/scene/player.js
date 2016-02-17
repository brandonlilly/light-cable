import { Mesh, SphereGeometry, MeshLambertMaterial, MeshBasicMaterial, MeshDepthMaterial, MeshPhongMaterial } from 'three'
import { TextureLoader, PointsMaterial, Geometry, Points, Vector3 } from 'three'

// class Player {
//   addToScene(scene) {
//     scene.add(orb)
//   }
// }

export function createPlayer() {
  // const geometry = new SphereGeometry(10, 32, 32);
  // const material = new MeshLambertMaterial({ color: 0xcccccc })
  // const sphere = new Mesh(geometry, material);
  //
  // sphere.position.set(0, 0, -50)

  const textureLoader = new TextureLoader()
  const materials = new PointsMaterial({
    color: 0xFFFFFF,
    size: 16,
    opacity: 0.99,
    map: textureLoader.load("assets/orb.png"),
    transparent: true
  })
  const geometry = new Geometry()
  geometry.vertices.push(new Vector3(0, 0, 0));

  const particles = new Points(geometry, materials);
  particles.position.set(0, 0, -50)

  return particles
}
