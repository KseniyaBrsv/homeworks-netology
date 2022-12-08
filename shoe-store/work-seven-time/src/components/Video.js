import {DateTime} from "./DateTime";

export function Video(props) {
  return (
    <div className="video">
      <iframe
        title={props.url}
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
      <DateTime date={props.date} />
    </div>
  )
}
