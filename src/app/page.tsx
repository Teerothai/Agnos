"use client"

import Image from "next/image"
import Question from "./components/question"
import Caption from "./components/modalAbs"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImg, setModalImg] = useState("")
  const [modalCaption, setModalCaption] = useState("")
  const allCoords = ["400,517,39", "343,399,355,373,400,334,439,367,456,399,400,468","270,524,344,527,371,563,333,641,297,619,266,577","398,566,426,582,458,641,427,665,398,673,361,656,345,639,369,592", "525,914,526,880,506,854,291,855,268,878,269,908,290,933,499,933","309,410,276,434,270,507,346,509,362,479,383,468,329,403","422,465,467,403,501,411,518,427,530,507,481,509,455,509,444,485","528,526,529,562,509,607,473,640,453,594,427,565,446,549,456,527"]

  const handleAreaClick = (img: string, caption: string, coord: string) => {
    if (modalOpen) {
      setModalImg(img)
      setModalCaption(caption)
    } else {
      setModalOpen(!modalOpen)
      setModalImg(img)
      setModalCaption(caption)
    }
  }

  const mapRebuild = (scaleValue: number): void => {
    const map = document.getElementById("map") as HTMLElement;

    Array.from(map.querySelectorAll("area")).forEach((area, index) => {
      const coords = allCoords[index];
      const coordsArray = coords.split(",");

      let scaledCoords = "";
      for (const coord of coordsArray) {
        scaledCoords += Math.floor(Number(coord) * scaleValue) + ",";
      }

      scaledCoords = scaledCoords.slice(0, -1);
      area.setAttribute("coords", scaledCoords);
    });
  }

  useEffect(() => {
    const handleResize = () => {
      const img = document.getElementById("image") as HTMLImageElement;
      const scaleProportion = img.width / 828
      mapRebuild(scaleProportion)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
    <div className="flex flex-col items-center">
      <Question question={"ปวดท้องที่บริเวณใดมากที่สุด"} />
      <div className="relative">
        <Image
          src="/abs/default-abs.png"
          alt="abs"
          width={828}
          height={976}
          useMap="#absmap"
          className="pointer-events-auto"
          id="image"
        />
        <map name="absmap" id="map">
          <area
            target=""
            alt="รอบสะดือ"
            title="รอบสะดือ"
            coords="400,517,39"
            shape="circle"
            onClick={() =>
              handleAreaClick(
                "/abs/umbilicus-highlight.png",
                "/abs/umbilicus-active.png",
                "400,517,39"
              )
            }
          />
          <area
            target=""
            alt="ลิ้นปี่"
            title="ลิ้นปี่"
            coords="343,399,355,373,400,334,439,367,456,399,400,468"
            shape="poly"
            onClick={() =>
              handleAreaClick(
                "/abs/epigastrium-highlight.png",
                "/abs/epigastrium-active.png",
                "343,399,355,373,400,334,439,367,456,399,400,468"
              )
            }
          />
          <area
            target=""
            alt="ช่องท้องล่างขวา"
            title="ช่องท้องล่างขวา"
            coords="270,524,344,527,371,563,333,641,297,619,266,577"
            shape="poly"
            onClick={() =>
              handleAreaClick(
                "/abs/rlq-highlight.png",
                "/abs/rlq-active.png",
                "270,524,344,527,371,563,333,641,297,619,266,577"
              )
            }
          />
          <area
            target=""
            alt="ท้องน้อย"
            title="ท้องน้อย"
            coords="398,566,426,582,458,641,427,665,398,673,361,656,345,639,369,592"
            shape="poly"
            onClick={() =>
              handleAreaClick(
                "/abs/suprapubic-highlight.png",
                "/abs/suprapubic-active.png",
                "398,566,426,582,458,641,427,665,398,673,361,656,345,639,369,592"
              )
            }
          />
          <area
            target=""
            alt="ปุ่มปวดทั่วท้อง"
            title="ปุ่มปวดทั่วท้อง"
            coords="525,914,526,880,506,854,291,855,268,878,269,908,290,933,499,933"
            shape="poly"
            onClick={() =>
              handleAreaClick(
                "/abs/all-over-highlight.png",
                "",
                "525,914,526,880,506,854,291,855,268,878,269,908,290,933,499,933"
              )
            }
          />
          <area
            target=""
            alt="ช่องท้องด้านบนขวา"
            title="ช่องท้องด้านบนขวา"
            coords="309,410,276,434,270,507,346,509,362,479,383,468,329,403"
            shape="poly"
            onClick={() =>
              handleAreaClick(
                "/abs/ruq-highlight.png",
                "/abs/ruq-active.png",
                "309,410,276,434,270,507,346,509,362,479,383,468,329,403"
              )
            }
          />
          <area
            target=""
            alt="ช่องท้องด้านบนซ้าย"
            title="ช่องท้องด้านบนซ้าย"
            coords="422,465,467,403,501,411,518,427,530,507,481,509,455,509,444,485"
            shape="poly"
            onClick={() =>
              handleAreaClick(
                "/abs/luq-highlight.png",
                "/abs/luq-active.png",
                "422,465,467,403,501,411,518,427,530,507,481,509,455,509,444,485"
              )
            }
          />
          <area
            target=""
            alt="ช่องท้องล่างซ้าย"
            title="ช่องท้องล่างซ้าย"
            coords="528,526,529,562,509,607,473,640,453,594,427,565,446,549,456,527"
            shape="poly"
            onClick={() =>
              handleAreaClick(
                "/abs/llq-highlight.png",
                "/abs/llq-active.png",
                "528,526,529,562,509,607,473,640,453,594,427,565,446,549,456,527"
              )
            }
          />
        </map>
        {modalOpen && (
          <Caption
            imageUrl={modalImg}
            captionUrl={modalCaption}
          />
        )}
        <button 
          key="next" 
          onClick={() => {router.push("/finger")}} 
          className="hover:translate-x-5 border border-solid border-blue-500 rounded-2xl px-15 py-15 w-[5rem] h-auto bg-blue-500 cursor-pointer transition duration-300 ease-in-out text-white font-bold text-20px m-side right-0 bottom-[2rem] absolute ">
              Next
        </button>
      </div>
    </div>
    </>
  )
}
