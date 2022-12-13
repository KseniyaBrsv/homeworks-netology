import moment from "moment";
import {Video} from "./Video";

const dateTimePretty = (Component) => {
   const Wrapper = (props) => {
    const fromNow = moment(props.date).locale('ru').fromNow();
    return <Component {...props} {...{ date: fromNow }} />;
  };
   return Wrapper;
};

const UpgradedVideo = dateTimePretty(Video);

export function VideoList(props) {
  return props.list.map(item => <UpgradedVideo url={item.url} date={item.date} />);
}
