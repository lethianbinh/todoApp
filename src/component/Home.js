import React, {useEffect} from "react";

function Home(props){
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Trang chủ";
    }, []);

    return(
        <div className="Home">
            <h1 className="home">Thông tin sinh viên</h1>
            <img src="https://cdn.icon-icons.com/icons2/933/PNG/128/round-account-button-with-user-inside_icon-icons.com_72596.png" alt="user"/>
            <h3 className="home-name">Lê Thị An Bình</h3>
            <h3 className="home-mssv">45.01.104.018</h3>
            <h3 className="home-email">Email: 4501104018@student.hcmue.edu.vn</h3>
        </div>
    );
}

export default Home;