import {ChangeEvent} from "react";

import "./search-box.style.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  // func:ChangeEventHandler;
  onChangeHandler:(event: ChangeEvent<HTMLInputElement>) =>void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
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
