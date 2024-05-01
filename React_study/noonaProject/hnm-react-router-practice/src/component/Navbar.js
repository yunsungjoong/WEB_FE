import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성"

    ];

    

    const goToHome = () => {
        navigate("/");
    }
    const goToLogin = () => {
        navigate("/login");
    }
    const navigate = useNavigate();
    const search = (e) => { 
        if (e.key === "Enter") {
            let keyword = e.target.value;
            navigate(`/?q=${keyword}`);
        }
    };
    
    return (
        <div>
            <div className="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div >로그인</div>
            </div>
            <div className="nav-section">
                <img 
                    width={100}
                    onClick={goToHome}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
                    alt=""     
                />
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu, index) => (
                        <li key={index}>
                            {menu}
                        </li> 
                    ))}
                </ul>

                <div className="search-box">
                    <FontAwesomeIcon  icon={faSearch}  />
                    <input 
                        type="text"
                        placeholder="검색어 입력"
                        onKeyDown={(e) => search(e)} 
                        />
                </div>
            </div>
        </div>
    );
};

export default Navbar;