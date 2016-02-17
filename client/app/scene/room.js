import { Mesh, IcosahedronGeometry, MeshDepthMaterial, MeshPhongMaterial, SphereGeometry } from 'three'

export function createRoom() {
  const geometry = new IcosahedronGeometry(500, 4);
  const material = new MeshPhongMaterial({ wireframe: true })
  const sphere = new Mesh(geometry, material);

  sphere.position.set(0,0,0)

  return sphere
}
