"use client"

import Image from "next/image"
import Question from "./components/question"
import Caption from "./components/modal"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import {absAreaProps} from "./constant/attributes"
import Button from "./components/button"

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
        {absAreaProps.map((props, index) => {
          const { img, caption, coord, ...rest } = props;
          return (
            <area
              key={index}
              target={rest.target}
              alt={rest.alt}
              title={rest.title}
              coords={rest.coords}
              shape={rest.shape}
              onClick={() =>
                handleAreaClick(
                  img,
                  caption,
                  coord
                )
              }
            />
          );
        })}
        </map>
        {modalOpen && (
          <Caption
            imageUrl={modalImg}
            captionUrl={modalCaption}
          />
        )}
         <Button text="Next" clickEvent={() => {router.push("/finger")}} style={{right: "0px"}} />
      </div>
    </div>
    </>
  )
}