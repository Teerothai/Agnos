interface ModalProps {
  imageUrl: string
  captionUrl: string
}

function Caption({
  imageUrl,
  captionUrl,
}: ModalProps): JSX.Element {
  const absPic = ["/abs/all-over-highlight.png", "/abs/umbilicus-highlight.png", "/abs/epigastrium-highlight.png", "/abs/rlq-highlight.png", "/abs/suprapubic-highlight.png", "/abs/ruq-highlight.png","/abs/luq-highlight.png", "/abs/llq-highlight.png"]
  const fingerPic = ["/finger/others-highlight.png", "/finger/dip-highlight.png", "/finger/mcp-highlight.png", "/finger/pip-highlight.png"]
  return (
    <>
      {imageUrl === "/abs/all-over-highlight.png" && (
        <>
        {absPic.map((each, index) => {
          return (
          <img
            key={index}
            src={each}
            alt="Modal Image"
            className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
          />);
        })}
        </>
      )}

      {imageUrl === "/finger/others-highlight.png" && (
        <>
        {fingerPic.map((each, index) => {
          return (
          <img
            key={index}
            src={each}
            alt="Modal Image"
            className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
          />);
        })}
        </>
      )}

      {imageUrl !== "/abs/all-over-highlight.png" && imageUrl !== "/finger/others-highlight.png" && (
        <>
        <img
          src={imageUrl}
          alt="Modal Image"
          className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
        />
        <img
          src={captionUrl}
          alt="Modal Image"
          className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
        />
      </>
      )}
        
    </>
  )
}

export default Caption
