import {Article} from "./Article";
import {Video} from "./Video";
import {New} from "./New";
import {Popular} from "./Popular";

const setHighlight = (Component) => {
  return (props) => {
    return props.views >= 1000 ? (
      <Popular>
        <Component {...props} />
      </Popular>
    ) : props.views >= 100 ? (
      <New>
        <Component {...props} />
      </New>
    ) : (
      <Component {...props} />
    );
  };
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
