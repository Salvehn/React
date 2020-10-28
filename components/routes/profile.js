import React from 'react'
import './modules/profile/css/index.css'
const Profile = (props) => {
    return (
        <div className="profile_wrapper">
            <div className="profile_main">
                <div className="profile_description">
                    <div/>
                    <div className="profile_credentials">
                        John Smith
                    </div>
                    <div className="profile_bio">
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                    </div>
                    <div className="profile_contact">
                        <button>Send Message</button>
                        <button>Add Friend</button>
                    </div>
                    <div/>
                </div>
                <div className="profile_logo">
                    <div>
                    </div>
                    <div>
                        <img src="" alt=""/>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className="profile_menu">

                <div className="profile_menu_item">
                1
                </div>
                <div className="profile_menu_item">
                2
                </div>
                <div className="profile_menu_item">
                3
                </div>
                <div className="profile_menu_item">
                4
                </div>

            </div>
        </div>
    )
}
export default Profile
