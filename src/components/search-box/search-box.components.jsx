import "./search-box.style.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

//  class SearchBox extends Component {
//   render() {
//     const {className, placeholder, onChangeHandler} = this.props;
//     return (
//       <input
//           className={`search-box ${className}`}
//           type="search"
//           placeholder={placeholder}
//           onChange={onChangeHandler}
//         />
//     )
//   }
// }

export default SearchBox;
