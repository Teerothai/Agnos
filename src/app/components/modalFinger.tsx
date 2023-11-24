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
        {imageUrl === "/finger/others-highlight.png" ? (
          <>
          <img
              src="/finger/others-highlight.png"
              alt="Modal Image"
              className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
            />
            <img
              src="/finger/dip-highlight.png"
              alt="Modal Image"
              className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
            />
            <img
              src="/finger/mcp-highlight.png"
              alt="Modal Image"
              className="absolute block w-[100%] h-auto max-w-[100%] left-0 top-0 pointer-events-none"
            />
            <img
              src="/finger/pip-highlight.png"
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
  