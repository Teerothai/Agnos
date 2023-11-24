"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import Question from "../components/question";
import Caption from "../components/modal";
import Button from "../components/button";
import {fingerAreaProps} from "../constant/attributes"

export default function Home() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImg, setModalImg] = useState("")
  const [modalCaption, setModalCaption] = useState("")
  const allCoords = ["177,238,199,231,218,240,217,260,192,272,175,266,172,250", "280,134,308,131,323,144,313,161,286,165,270,151", "367,91,398,85,411,99,404,119,371,121,355,107", "458,131,467,111,502,112,514,128,500,144,470,146","199,333,205,313,232,303,248,312,244,334,215,345", "283,234,321,228,335,244,325,263,289,268,275,255","373,197,410,194,422,211,412,228,376,230,363,217","466,209,503,209,518,226,504,244,465,243,455,226", "635,406,654,396,683,417,679,432,663,446,636,425","234,405,273,390,293,397,297,417,288,433,252,444,232,440,227,422","299,372,343,357,360,368,365,386,353,401,312,413,299,404,294,389","377,344,423,340,436,355,436,373,423,386,383,388,370,374,367,359","460,340,503,345,515,359,511,380,497,389,454,382,445,368,446,352","596,506,618,529,623,549,607,564,585,558,563,537,564,519,573,509","146,881,121,903,119,935,143,959,661,960,687,939,687,904,660,879"]

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
      <Question question={"จุดไหนที่คุณปวดนิ้วมากที่สุด"} />
      <div className="relative">
        <Image
          src="/finger/default-finger.png"
          alt="abs"
          width={828}
          height={976}
          useMap="#fingermap"
          className="pointer-events-auto"
          id="image"
        />
        <map name="fingermap" id="map">
        {fingerAreaProps.map((props, index) => {
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
        <Button text="Back" clickEvent={() => {router.push("/")}} style={{left: "0px"}} />
      </div>
    </div>
    </>
  )
}