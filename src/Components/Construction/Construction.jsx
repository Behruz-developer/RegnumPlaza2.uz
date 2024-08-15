import construction from '../../assets/images/construction.png'
import construction2 from '../../assets/images/construction2.png'
import construction3 from '../../assets/images/construction3.png'
import construction4 from '../../assets/images/construction4.png'


const Construction = () => {
  return (
    <div className="construction">
        <div className="container">
            <h2 className="construction_title">Qurilish jarayoni</h2>
            <div className="construction_box" data-aos="zoom-in-up" data-aos-offset="400">
                <div className="construction_card">
                    <img src={construction} alt="" />
                    <p className="construction_text">Iyun</p>
                </div>
                <div className="construction_card">
                    <img src={construction2} alt="" />
                    <p className="construction_text">May</p>
                </div>
                <div className="construction_card">
                    <img src={construction3} alt="" />
                    <p className="construction_text">Aprel</p>
                </div>
                <div className="construction_card">
                    <img src={construction4} alt="" />
                    <p className="construction_text">Mart</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Construction
