import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';
import './SimpleBox.css';

const Box = () => {
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    const animProps = useSpring({
        scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
        color: hovered ? 'hotpink' : 'gray',
    });

    return (
        <a.mesh
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setActive(!active)}
            scale={animProps.scale}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <a.meshBasicMaterial attach="material" color={animProps.color} />
        </a.mesh>
    );
};

const SimpleBox = () => {
    return (
        <Canvas>
            <Box />
        </Canvas>
    );
};

export default SimpleBox;
