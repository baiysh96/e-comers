import React, {useState} from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import {useSelector} from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import "./Search.css"
import { useNavigate} from "react-router-dom";

export default function Search() {
    let navigate = useNavigate();
    const [text, setText] = useState("")
      const handleChange = (e) => {
          setText(e.target.value)
      }
      const handleSearch = () => {
          navigate("/catalog")
      }
    return (
        <div className="search">
            <input onChange={handleChange} value={text} type="text" id="search_input" placeholder="Search product"/>
            <SearchIcon onClick={handleSearch} color="action"  className="search-icon"/>
            <CloseIcon onClick={() => setText("")} color="primary" className="search-close" />
        </div>
    );
}
