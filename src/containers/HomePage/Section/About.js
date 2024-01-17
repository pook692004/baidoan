import React, { Component } from 'react';
import { connect } from 'react-redux'; //giup react nói chuyện được với redux
import { FormattedMessage } from 'react-intl';


class About extends Component {
    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Giới thiệu
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/be12BC5pQLE"
                            title="Adele - Hello (Lyrics)"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>Cuộc đời là những chuyến phiêu lưu trong đó con người là những người du hành không biết mệt mỏi. Vậy để trở thành những người du hành thông thái có vốn tri thức và hiểu biết phong phú thì sao chúng ta cần không ngừng cố gắng, vươn lên, thành quả của mọi nỗ lực là những trải nghiệm đáng quý nhất. Trải nghiệm là tổng hợp những tri thức, kĩ năng hoặc những quan sát được tích lũy thông qua việc tham gia hoặc tiếp xúc với những sự vật, sự kiện. Trong cuộc sống, trải nghiệm được hình thành qua những hoạt động, sự kiện mà con người đã tham gia. Trải nghiệm là thành quả giá trị không chỉ để chúng ta học tập mà còn là những khám phá thú vị để ta trưởng thành hơn, bản lĩnh hơn trong cuộc sống. Trải nghiệm không chỉ là việc khám phá một mảnh đất mới, thưởng ngoạn một danh thắng mà còn là cơ hội để chúng ta học tập, tích lũy thêm những kinh nghiệm, rèn luyện những kĩ năng cần thiết và cũng là cách để con người bộc lộ được những tiềm năng; là cơ hội để con người hiểu hơn về giá trị của chính bản thân mình. Để có những trải nghiệm, chúng ta hãy hành động, tự mình tham gia để cảm nhận được những thành quả từ những hoạt động ấy. Đừng sống lãng phí, hạn hẹp như con ếch ngồi đáy giếng, cũng đừng sống dựa trên những trải nghiệm của người khác mà hãy sẵn sàng học tập, hoạt động để có những trải nghiệm. Trải nghiệm có ý nghĩa to lớn đối với sự trưởng thành và phát triển của con người. Vì vậy đừng ngại những hoạt động, hãy xách ba lô đi để trải nghiệm, phát triển các bạn nhé.</p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {

    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
