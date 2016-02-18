import { TextureLoader, PointsMaterial, Geometry, Points, Vector3 } from 'three'

export function createPlayer(x = 0, y = 0, z = 0) {
  const textureLoader = new TextureLoader()
  const materials = new PointsMaterial({
    color: 0xFFFFFF,
    size: 16,
    opacity: 0.99,
    map: textureLoader.load("assets/orb2.png"),
    transparent: true
  })
  const geometry = new Geometry()
  geometry.vertices.push(new Vector3(0, 0, 0));

  const particles = new Points(geometry, materials);
  particles.position.set(x, y, z)

  return particles
}
