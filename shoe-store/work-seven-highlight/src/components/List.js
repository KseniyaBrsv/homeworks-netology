import {Article} from "./Article";
import {Video} from "./Video";
import {New} from "./New";
import {Popular} from "./Popular";

const setHighlight = (Component) => {
  const Wrapper = (props) => {
    if(props.views >= 1000) {
      return <Popular>
        <Component {...props} />
      </Popular>
    } else if(props.views >= 100) {
      return  <New>
             <Component {...props} />
              </New>
    } else return <Component {...props} />
  }
  return Wrapper;
};

const UpgArticle = setHighlight(Article);
const UpgVideo = setHighlight(Video);

export function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <UpgVideo {...item} />
        );
      case 'article':
        return (
          <UpgArticle {...item} />
        );
    }
  });
};
