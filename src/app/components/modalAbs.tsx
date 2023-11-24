interface ModalProps {
  imageUrl: string
  captionUrl: string
}

function Caption({
  imageUrl,
  captionUrl,
}: ModalProps): JSX.Element {
  return (
    <>
      {imageUrl === "/abs/all-over-highlight.png" ? (
        <>
        <img
            src="/abs/all-over-highlight.png"
            alt="Modal Image"
            className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
          />
          <img
            src="/abs/umbilicus-highlight.png"
            alt="Modal Image"
            className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
          />
          <img
            src="/abs/epigastrium-highlight.png"
            alt="Modal Image"
            className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
          />
          <img
            src="/abs/rlq-highlight.png"
            alt="Modal Image"
            className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
          />
          <img
            src="/abs/suprapubic-highlight.png"
            alt="Modal Image"
            className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
          />
          <img
            src="/abs/ruq-highlight.png"
            alt="Modal Image"
            className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
          />
          <img
            src="/abs/luq-highlight.png"
            alt="Modal Image"
            className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
          />
          <img
            src="/abs/llq-highlight.png"
            alt="Modal Image"
            className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
          />
        </>
      ) : (
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
