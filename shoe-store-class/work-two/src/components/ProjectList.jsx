import '../App.css';

export const ProjectList = ({projects}) => {
  return (
    <ul>
      {projects.map((el, index) => {
        return (<li key={index}>
          <img src={el.img} alt="" />
        </li>
        )
      })}
    </ul>
  )
}


