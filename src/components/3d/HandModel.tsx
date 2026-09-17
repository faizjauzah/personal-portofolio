import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

export function HandModel() {
  const ref = useRef<THREE.Group>(null);
  const objPath = `${import.meta.env.BASE_URL}hand.obj`;

  const obj = useLoader(OBJLoader, objPath);

  // Robustly handle any 3D model regardless of its original coordinates or scale
  const clonedObj = useMemo(() => {
    const clone = obj.clone();

    // Apply the strict Bauhaus Red material with lighting support
    const mat = new THREE.MeshStandardMaterial({
      color: "#D02020",
      roughness: 0.3,
      metalness: 0.1,
    });
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = mat;
      }
    });

    // Compute bounding box to find the size of the object
    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    box.getSize(size);

    // Scale everything down so the max dimension is exactly 6 units (fits nicely in the camera view)
    const maxDim = Math.max(size.x, size.y, size.z);
    const scaleFactor = 6 / maxDim;
    clone.scale.set(scaleFactor, scaleFactor, scaleFactor);

    // Recalculate box after scaling
    const scaledBox = new THREE.Box3().setFromObject(clone);
    const center = new THREE.Vector3();
    scaledBox.getCenter(center);

    // Center the object perfectly at [0,0,0]
    clone.position.sub(center);

    // Provide a default 75-degree pitch upward so the hand points at the user instead of down
    clone.rotation.x = -THREE.MathUtils.degToRad(65);

    // Roll axis
    clone.rotation.y = -THREE.MathUtils.degToRad(5);

    // Yaw the hand 15 degrees to the left (using Z axis because of Euler XYZ order after X pitch)
    clone.rotation.z = -THREE.MathUtils.degToRad(15);

    return clone;
  }, [obj]);

  // Cursor tracking logic
  useFrame((state) => {
    if (!ref.current) return;
    const targetX = (state.pointer.x * Math.PI) / 4;
    const targetY = (state.pointer.y * Math.PI) / 4;

    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetX, 0.1);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -targetY, 0.1);
  });

  return (
    <group ref={ref}>
      <primitive object={clonedObj} />
    </group>
  );
}
