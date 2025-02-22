"use client";
import * as fabric from "fabric";

import LeftSidebar from "@/components/LeftSideBar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSideBar";
import { useEffect, useRef } from "react";
import {
  handleCanvasMouseDown,
  handleResize,
  initializeFabric,
} from "@/lib/canvas";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>("rectangle");

  useEffect(() => {
    const canvas = initializeFabric({
      canvasRef,
      fabricRef,
    });

    const handleMouseDown = (options) => {
      handleCanvasMouseDown({
      options,
      canvas,
      selectedShapeRef,
      isDrawing,
      shapeRef,
      });
    };

    canvas.on("mouse:down", handleMouseDown);

    const handleResizeEvent = () => {
      handleResize({ canvas: fabricRef.current });
    };

    window.addEventListener("resize", handleResizeEvent);

    return () => {
      window.removeEventListener("resize", handleResizeEvent);
    };
  }, [canvasRef]);

  return (
    <main className="h-screen overflow-hidden">
      <Navbar />

      <section className="flex h-full flex-row">
        <LeftSidebar />
        <Live canvasRef={canvasRef}/>
        <RightSidebar />
      </section>
    </main>
  );
}
