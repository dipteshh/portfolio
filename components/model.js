import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['1041']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['1042']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['1043']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['1053']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['1054']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['1055']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['1045']} />
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
