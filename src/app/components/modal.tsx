import Image from "next/image"

interface ModalProps {
  imageUrl: string
  captionUrl: string
  coordinates: number[]
}

function Caption({
  imageUrl,
  captionUrl,
  coordinates,
}: ModalProps): JSX.Element {
  const position = `left-[${coordinates[0]}px] top-[${coordinates[1]}px]`
  return (
    <>
      {imageUrl === "/abs/all-over-highlight.png" ? (
        <>
        <img
            src="/abs/all-over-highlight.png"
            alt="Modal Image"
            className="absolute"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              left: `0px`,
              top: `0px`,
              pointerEvents: "none",
            }}
          />
          <img
            src="/abs/umbilicus-highlight.png"
            alt="Modal Image"
            className="absolute"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              left: `0px`,
              top: `0px`,
              pointerEvents: "none",
            }}
          />
          <img
            src="/abs/epigastrium-highlight.png"
            alt="Modal Image"
            className="absolute"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              left: `0px`,
              top: `0px`,
              pointerEvents: "none",
            }}
          />
          <img
            src="/abs/rlq-highlight.png"
            alt="Modal Image"
            className="absolute"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              left: `0px`,
              top: `0px`,
              pointerEvents: "none",
            }}
          />
          <img
            src="/abs/suprapubic-highlight.png"
            alt="Modal Image"
            className="absolute"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              left: `0px`,
              top: `0px`,
              pointerEvents: "none",
            }}
          />
          <img
            src="/abs/ruq-highlight.png"
            alt="Modal Image"
            className="absolute"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              left: `0px`,
              top: `0px`,
              pointerEvents: "none",
            }}
          />
          <img
            src="/abs/luq-highlight.png"
            alt="Modal Image"
            className="absolute"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              left: `0px`,
              top: `0px`,
              pointerEvents: "none",
            }}
          />
          <img
            src="/abs/llq-highlight.png"
            alt="Modal Image"
            className="absolute"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              left: `0px`,
              top: `0px`,
              pointerEvents: "none",
            }}
          />
        </>
      ) : (
        <>
          <img
            src={imageUrl}
            alt="Modal Image"
            className="absolute"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              left: `0px`,
              top: `0px`,
              pointerEvents: "none",
            }}
          />
          <img
            src={captionUrl}
            alt="Modal Image"
            className="absolute border-red-300 border-[1px] border-solid"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              left: `0px`,
              top: `0px`,
              pointerEvents: "none",
            }}
          />
        </>
      )}
    </>
  )
}

export default Caption
