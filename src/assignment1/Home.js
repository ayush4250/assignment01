import React,{useState,useEffect} from 'react';
import './Home.css';
import jsonData from './cardData.json';
import image1 from '../images/team01.jpg';


function Home() {

    // const [post, setpost] = useState([]);
    const [currentpage, setcurrentpage] = useState(1);
    const [postperpage] = useState(6);
    const [pageLimit] = useState(3);
    const [isSwitchon,setisSwitchon] = useState(false);


    const indexoflast = currentpage * postperpage;
    const indexoffirst = indexoflast - postperpage;
    const currenpost = jsonData.slice(indexoffirst, indexoflast);

    const pagenumber = [];
    const totalpost = jsonData.length;
    for(let i=1;i<= Math.ceil(totalpost / postperpage); i++){
        pagenumber.push(i);
    }


    const paginate = (pagenum) => setcurrentpage(pagenum);

    const goToPrev = () =>{
        setcurrentpage((page)=>page-1)
    }

    const goToNext = () =>{
        setcurrentpage((page)=>page+1)
    }

    const getPaginationGroup = () =>{
        let start = Math.floor((currentpage -1) / pageLimit) + pageLimit;
        return new Array(pageLimit).fill().map((_id,idx)=>start + idx +1);
    }


    return (
      <div>
        <div className="sidebar">
          <div className="profile">
            <div className="profilepic">
              <img src={image1} alt="" />
            </div>
            <div>
            <h3>Hi Reader,</h3>
            <p>here is your name</p>
            </div>
          </div>
          <div className="switch">
            <h2>View Toogle</h2>
            {/* <label className="toogle">
              <input onClick={()=>setisSwitchon(!isSwitchon)} type="checkbox" />
             <label for='' className="onbtn">On</label>
             <label for='' className='ofbtn'>Off</label>
            </label> */}
            <button onClick={()=>setisSwitchon(!isSwitchon)}>{isSwitchon ? 'Card View': 'List View'}</button>
          </div>
          <div className="feedback">
            <h3>Have a Feedback?</h3>
            <button>We're Listening</button>
          </div>
        </div>
            <div className='contain'>
        <div className={isSwitchon ? "main" : "maingrid"}>
          {currenpost.map((id, index) => {
            return (
              <>
              <div className={isSwitchon ? "card" : "cardgrid"}>
                <h3>{id.title.length > 50 ?  id.title.substr(0,50) : id.title }</h3>
                <p>{id.body.length > 50 ?  id.body.substr(0,50) : id.body }</p>
              </div>
              </>
            );
          })}

     </div>
     <ul className="pagination">
            <li className="page-item">
              <a onClick={goToPrev} className="page-link" href="#">
                Previous
              </a>
            </li>

            {getPaginationGroup().map((id, index) => {
              return (
                <li key={id} className="page-item">
                  <a
                    onClick={() => paginate(id)}
                    className="page-link"
                    href="#"
                  >
                    {id}
                  </a>
                </li>
              );
            })}
            <li className="page-item">
              <a onClick={goToNext} className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
     </div>
        
      </div>
    );
}

export default Home

