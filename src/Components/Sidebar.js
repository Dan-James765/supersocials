import React from 'react'
import { MdRssFeed } from 'react-icons/md';
import { BsFillChatSquareDotsFill } from 'react-icons/bs';
import { BsCameraVideoFill} from 'react-icons/bs';
import { BiGroup} from 'react-icons/bi';
import { BsQuestionOctagonFill} from 'react-icons/bs';
import { BsBookmarkFill} from 'react-icons/bs';
import { Avatar } from "@material-ui/core";


function Sidebar() {
    return (
        <>
        <div className="flex-grow-0.2 w-2/12">
        <div className="py-4 px-4 border shadow-lg">
            <div className="flex flex-col text-gray-500  ">
                <h1 className="flex gap-x-1 cursor-pointer py-1 hover:bg-gray-200 transition delay-90 px-2 hover:text-gray-900"> <MdRssFeed  className=" my-1"/> Feed</h1>
                <h1  className="flex gap-x-1 cursor-pointer py-1 hover:bg-gray-200 transition delay-90 px-2 hover:text-gray-900"><BsFillChatSquareDotsFill className=" my-1"/> Chats  </h1>
                <h1 className="flex gap-x-1 cursor-pointer py-1 hover:bg-gray-200 transition delay-90 px-2 hover:text-gray-900"><BsCameraVideoFill  className=" my-1"/>Videos</h1>
                <h1 className="flex gap-x-1 cursor-pointer py-1 hover:bg-gray-200 transition delay-90 px-2 hover:text-gray-900"><BiGroup  className=" my-1"/> Groups</h1>
                <h1 className="flex gap-x-1 cursor-pointer py-1 hover:bg-gray-200 transition delay-90 px-2 hover:text-gray-900"><BsBookmarkFill  className=" my-1"/> Bookmarks</h1>
                <h1 className="flex gap-x-1 cursor-pointer py-1 hover:bg-gray-200 transition delay-90 px-2 hover:text-gray-900 "><BsQuestionOctagonFill  className=" my-1"/> Questions</h1>
           
           

            </div>
            <hr className="  border-gray-300  m-auto border my-2" />
          <div >
              <div className="flex  hover:bg-gray-200 transition delay-90 rounded-full px-2 py-1 cursor-pointer">
          <Avatar src="https://scontent.flhr3-3.fna.fbcdn.net/v/t1.6435-9/38781010_2579432842082139_3002868557282279424_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=asaBcCZ6MhkAX-ltZTU&tn=PE0_JBPglr_ujwNN&_nc_ht=scontent.flhr3-3.fna&oh=a3f2fde494ed325952e3065bc7bae2c4&oe=60D30D14"/>
          <h1 className="pt-2 pl-2 font-semibold  ">Dan James</h1>
          </div>
              <div className="flex  hover:bg-gray-200 transition delay-90 rounded-full px-2 py-1 cursor-pointer">
          <Avatar src="https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I="/>
          <h1 className="pt-2 pl-2 font-semibold  ">Joe Bloggs</h1>
          </div>
              <div className="flex  hover:bg-gray-200 transition delay-90 rounded-full px-2 py-1 cursor-pointer">
          <Avatar src="https://media.gq.com/photos/5e5ebb6de196b50008c072e5/master/w_3000,h_4500,c_limit/burna-boy-gq-style-spring-summer-2020-11.jpg"/>
          <h1 className="pt-2 pl-2 font-semibold  ">Burna Boy</h1>
          </div>
              <div className="flex  hover:bg-gray-200 transition delay-90 rounded-full px-2 py-1 cursor-pointer">
          <Avatar src="https://thesource.com/wp-content/uploads/2020/11/image001-1-750x400.jpg"/>
          <h1 className="pt-2 pl-2 font-semibold  ">Wiz Kid</h1>
          </div>
              <div className="flex  hover:bg-gray-200 transition delay-90 rounded-full px-2 py-1 cursor-pointer">
          <Avatar src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"/>
          <h1 className="pt-2 pl-2 font-semibold  ">Jeff Bezos</h1>
          </div>
              <div className="flex  hover:bg-gray-200 transition delay-90 rounded-full px-2 py-1 cursor-pointer">
          <Avatar src="https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"/>
          <h1 className="pt-2 pl-2 font-semibold  ">Elon Musk</h1>
          </div>
              <div className="flex  hover:bg-gray-200 transition delay-90 rounded-full px-2 py-1 cursor-pointer">
          <Avatar src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhYYGBgaHRofHRwcGCEaIx4cHCEhHiMcISEcJC4lHB4rHxwaJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALYBFAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAgMEBQcAAQj/xABDEAACAQIEAwQHBQYEBgMBAAABAhEAAwQSITEFQVEGImFxEzKBkaGx8AdCUsHRFGJygpLhFSRT8SMzVLLS4jSiwoP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQACAgICAgICAwAAAAAAAAAAAQIRITEDEkFRImEycRMjof/aAAwDAQACEQMRAD8A0axgAmJd+TKCo6Envfl76HeJYrEjFFlZgiuAFk5Suggjxq2w/F3uuiokFdWYnfTUR0NWWJxCrLFJYfpNZuSQ1GyDjkH7TYcL34dT4rE/OkWMGv7TevFZcBFWeQyyfaaVZxdtj+0O0ZVIUcgOcDcmqC12mKYh3Kk23jTmANAR4xuKE7JcXHYvgfHcRcxBV2DIxaECxlA8fZzpfat4vIkR/wAK83/ZpUjDcTwKublsMXadMp3O++gqq7Qrca8juuUNbvAeGikD3UMa07DkHahvj7f5hB+5/wDoURLsPIUL9oWjEp/AP+8UPRUPyX7RJtYUkSQg8xTL2RMZRPKKsFw6nWNDqYO9R+IIFyAaET7q5oycnR2S5XHLSHMPw6ZLaA7jmads2l1AWBGs1U4/tjh8OoF15c6BEGdyfIer7YqmxWP4xiVJw2HNi28gekKi5p9+H9Tpseo610xWDnnJydsu8T2vwOEdluXO8JBRQXYEcjGi+0iqqz9r6FzGEuG2ADIcFwNJJWMoGv4unXSm7LthcC7Nj8HiEuqDmvupvICTEjKCFmQM3eOp1E1Ydru1vDktZcDaw1x7wh2W2FCqIYZxlBY5oOU/hM1ZiWF/7XrEHLh7hHIs6r74mPjQ7xH7SmdCLaPbeSVYMCATGhHMet8PGM8AnlSstAWe3brOxZtySTpEk68tN+VIVdac8a8AqQPUbpXMa9JrlQT+VOwODeNLS4QfoV2x2r3JPhTEXnZ7tBcwz5kMhozofvR5bHU660U4ntamIIzAoABoTzO9ZyU8acW71FTWbH2xTNDS4OvkaW7Agg60JcO4qylQxJTbXUgefMUW4IK+7AdKbaocU26RS3Dr0pNm7kYNJBHSpnFbIW4QpkaHQzVe4o2hyVOgs4FxokwSDRVbvZhmFZVhsSUaQPZR/wAExiugg7jboRWMk4v6Li7BztzgsrrdGz6H+IfqPlRF2TxWfDrrJUR7q97RYT0lh1jUDMPNdaHewWOyu1snQ6inF2htUHTvpSXfbWm3EGm3Yk1DdFJE30grqiV1HYKOwvCbid5HCmdecjyqbatu6kP3W3058qm4O8HRW6gUgE5zVPJCxYNX8BefSAEUkADQkHxqo43woW0VlUjkZM0eWefnQ/2nuIQFZoEE+ZGwoi3gJfKwT4db7wiiPtCzHJP4Lo2/cFU+AZQBp3iamcZvv6S2HMj0d6BA3ygcqrt8qCXH/WmHCbDyFC3aJZxKDqij3vRUg0HkKFe0Y/zKfwr/AN1U9EQ/JftE82HTRHI/lJpkYJm7zOCT1BpwWVP3iPJq99HAGV28s1ZQcfRrzRfa3kj4Ls9hrTvdW0npDmbOZZpbeM3q+yKvMPJAjlUBCyzm1B8ak4G9rFbIlyi19j3aDEWkwl43nKIUKs6zIzaDLH3pIA8SK+alFa79sPE2TD2rCsB6RyzrzKpBHkM5U+YFZPYtk7CdY9pqjJnKCdBUq3w9zGlWeBwAWCRrV9grIBrKU/R0Q4bVyBV+EuOU05a4K5Enbw1o2s4bMZgGPLX21MbBiIIHu00/2+dLs2W+KKZnrcGcCfy+uVQHsMu4jzrSL6ASI0od42q5QI9vu/vQpOyZ8UatArXseNeuvKm2SfCtDmoVkPWaUzwNdfDpSGfKIFICyNN6LAftvGvKjXsTiLNybFwDOWRrbE6kSA6e7UfzUDKDEjbnzp/DXyjKwJBUyCNwRqCOmutA0bre7NYaf+WBo+kn371RYbg1kYL0zpmcHNuRKh4j3VI7M9tLeIQJeOS6qkMY0YH7yxt4jr4VNxHEcOuGNkPMJAOU6n3e2nY6Y3/gGFbEhBZhVTO3eMEsYA35QakcF4PbtoWCwQ9ydTsGIHwAppO0GGF53zzKW1HdbkTPLlNW2GxSFTlOhzHYjczz86mTXkai7wdjLSBNBvHtmsstWWs4tlHJtPI6itPxWLtxkVhOkL5UMcWwqLdW8VmBB8xsayckpYN48bkq8hCSSqtG4pvNTy4hXtqRz/Ko8xUSeRxj4aHa6mw/gfdXlKyupNwL5RkVs0EifKmb+PVXPfgjlEipPoApbL+I00+EziVOVuek0O7Ih1X5DeDxmYNlcPrrQx2txThkfLNvUT+90om/ZwgyrudzVdbs53fDuua26yD+Fh9fCnxupZFyJNNxKXhWNQMGZOQip/Grqu1loiVuwf5arrHZy/buw2qH7w/PpTGNLriURvUC3Mp8SBWnVd8M0nKMuG1tbNOQaDyFC/HknF2vJP8AuNFSDQeyhjjWuMtDwT5tWng447X7Lw4VJ9UV6+CQ/dpYQb+NLCiJqUjRttU2RmwKdPjUXDJD6aCYGs1PvgjUE7H4VQca4qtixcvHXKNBtLHRR7SRWi0YPDMp7fcRN/HXTmzLbORekJoY/mzVIwGJT9ltWkWGV7j3GIgs50XXmFSB7T40MMCSSd+fmavsFaIRR5/Opk6RpxK5WWeGSTVthkgb1W4e2fE1cWzGw+vqK57PQrBPwY51LZJqutv5Dbn9fUUr/EE2mfZPX9D7q0TszkqY1jueunOhPjjxuvP4fX5UUYy9v4zQxxG1mB3Pt6VPZWVKLcQacA0276VIxVjLzqNvWyOGSadM8VJ3pJMGlMTXhgjxoJJNrzifqaSV10+jTFp+ROlOudfOgZLw2KdCtxGKuhkEfLxrROA9q0xKC1dRRcEb7ORMkQBHLT51mdswY5fU1ysVaQYI1BGnkRSaspSo2m3dRNrSjyFPf4iAD3DUDsrxRL+HR3JLRleebroSD47+2rZURpAE6c+m1c0kdMWiNYxaPrGo6jY+dOuiuCrQRULDAIWBWdfl/aKkYe9bZogA9CIqFst4JGHXKiLBgA6+RrkcGY5GOmtIw94KxSIBPxpd26okk7Voybti8xrqjpxC3HrfCuooLL7ENDHfrtUdmPX4GkYu8c2hIkjLruYI+JFIw14jOHOwJ8tTVSjk5lI5n8q9wCKHZyRJ09lQrOIY6uSB93x7w3PWKkC+xUtmiCBsNZJ/tRGLuxSnii1QgihbtfZAewQNczj3rVvbxr6eJAiNtQD86pO11wsMKTubjDTyIrZUzO2GqjShLtA3+cSPwr82ouUUE9qceLGMRyjMAgjusRuw3AMHWm9YKi+sk2XCXH8aeW63WqC123s/eUL5yPmtSbfbDCn7yD+cfnULt6Oh8kGXD4h/xfCsx+0LFPmW0G7gGdl6mcqn56edaAnaDCv99P61/WgX7SWtEI6MC1yFgEEBUJYnTckum/4atN+jCSVtpgAG+NEOAxqAKs6gAUPcxrUu3hLm6wOgLAHwokk9j45OLtILbWKHjHXlXmM4iVU5d/rWhuxcuB8jghtoOmn5+dFF/hSm0jFtWG29c7jTydyn2jgGcRxm8xgtA6DSrvg6q0E5ieozAf38zVVibIskllg8pHxqyXi13DKtx7TlGkAlwusTqBMaTpV34Rn1UbcnZNvMinuk+XKoOIHSlYZrt7veiKhtRmOvmM2pHjUv9gYKcwrNp2bxknHANcStGJ+vdVSxNE2OtSum/Kh64mpB91bReDj5o1KyP768zQR1FEHAOGWnM3T3em01Lu4JsR6RMNaVLNsPL5cxdkEkZj8vH2U7RP8AE6sFXWDIp1xKyKakxUgr8RP+1UZo9wYDZp0OViNJ7y6x7YI8zTdwwQPDQ0myN6eu2iUzgaLAPhmmD5SCPaKA8B99mz5rV9D91kYfzA/+AoxwDH4a+HeNZ99mWLCYlkJgXEIA6shzAf05q1IIOlYTXyNoS+JTuD6QkciPjINKxNsM4IjTfyqY+BEkg7+FLtYZVOg161kk7NOyoqriEFcx1gfA/pTd53RyZOUg8pidZHj4VaYrDFiCI0rraEKFOsDnWjEmVfpWOvpF+Xwiuqx9An4RXVI7PLnHcCxn9pt8o767jpS7XF8IQw9MjZp1Lr+tBN1ezzf6q+Reoz4HgB2u3l9r/mtdXU4w8XFYeAPSq0Ekd5eftpxntFYzrBInUbgyOdZ03BeCHbF3h7P1SvB2a4SfVx9weYX/AMKVAadbCEzn5g/r8qo+17D/ACqgz/xj4b/70KWuyuAJhOJvPLRf0ogwn2bsjo4xbsFZWhkBkAgxvpMU0qEzRVpUUkUn0y/iX3imMUUXoPdSGwiHdEPmopYuL+Ie+vc46j30ARH4VYO9m2fNF/Ssl+1S3bTE27du2iBEzMVQKCzkxMb6Jp7a2XMOorHvtKYm9dYwCbltFA3KWrQfN4S2IYeygKAS5ZYZWIIVgSp6wSpj+YEVb4RGe07elyOIKKCFzQddeuh+jVz2g4ei8M4fc2c+kXzW4Wf3yB/UaqOHYRSiEyZnSdPWPKpm6RpwxblRY8GwVy46m663IgrJLFD0zHlG4kjQbEUQ8QjOI1UQK94RhpJVY0HKovEUZHg/X0K5ZSbyejxxUcE7imE9OiunrKIkiQR8xvVXYwGJcBc6FRsCNo20PSrvs1ijldDrEH37/Cpdy2s5lADeNXtJktpNoawHDWTvu5djpJ+QHIVG4kMog1O/a2GkaeP9qoOKYvUkmYob8BFO7ZR41yJoZvHUyKssZiiW18vzqqdzr8a1gqRyc8lJ4CDAYXNhXcEyDHtjSrLgr3sMqZ+/buAqe6JUzqs7kayJ8ag8PsPcsoikKivmO/ePIGPCrjjPFLj5VyoqIO73cqg/iOpJHPU61D3g3jXVX6AbH2slx06Mw08DXrt8gPr6NdjLgZywJgnQndoGrHzOvtpi6dRWxxvbPFG48aIezeEt3LeL9IDCYa46wYh1iD7Oh61RQNT5eFScPfdEdFJC3AofxCNmA8pigSPcBjGs3EuJ6yMGHsOx8CND4E1vvCL6Yiyl5RCuoaJmOq+YMj2V87qd60H7N+0OQNhnYwWLIfEjvL8M3talKkrYRvRpWGQNnzLsxA15VITDJ0qo/wAQiYO/hSl4mSfW+FYrkjop/stDhl07vOmThkOpXWeRO01EPET+I+6mX4lGmb4VTnEV/Y/isIubQaedeUweITrmNeVPaI+32ecT7PYT0RIw1qcu4QSPHSqjDdksAyM5tow1A13PkNjNVN3irgHM7R0zGI6RNQrfHyhOTSfbXXRwvld4QQr2UwAsI74dAzLzJBLeHjXmJ7G4BbiA4cZCBJBbRjtrNUuG4kzlQzFguwJq7fjGaEYNBI++REc6TWLHHkUn10yi7X8BwuFawLKZXLHMcxPdg6QfH5VquE9RP4V+VZX23eWtHUnP6xefunSIrUsH6ifwr8qluzdKiSKz/AcCt4jE4o3HdQjmMj5RqTqa0AUG8FUm/jQPxj3SaBsfTsrhhtevD/8Ap+oqRa7M2+V+/wD1g/8A5qc7LkEDUb6VIsOAdelDY1EqW4Iqn/5V4fzJ+a1mf2i2DbxOQOzgojy0TmaVjugfdRPfWhdp+KLh7L3SM0EBR1Y7T0FY6vEboum+GBuMW7zDO3eEFu8CFMaAjUcqE2y5RUUsjmFAdlt37pRLa3CNC8Nl0UATqSFHhB505wrEQs81kx471UlthT+GuZGJ8KmStBCXWVl/w7tUbfeU5SQR79KWnaPEZM72Xe2dA7qYHk3WhkIJBK6bnlOtT14s4QJoVBBAjaOnwqOiRt/NJ7f+Bl2Hum6925BVAuUTzYmY8YA18xV7ecieY5c/mNKBsD2juhcsAAaaaRMddOnspxOPkiHEjnrlMeYo60qNO6btsKsZdH+319SKFOMXSAZ5/DSnsXj4QFSfCTOh6ePjVDxO8Wjf+/sqVG2VKfWLRX3Lk7ny1+vqKZL/AFO/P40pjy9tNsROlbI4myfw7itzDuWUBlaJU7GNj50jinGbl4wYCz6oqM/qx0NNWt56Uq8jcpVV4HlEny091dPfnp9RSkOUfGfGmbO+vT6/OmIW+hP1tUnh9xA6G56mZc3UrOu3hUW/UzAcLvX5Szba4yjMQsSF2mCRpJA060ASuKWgXxDgCBdLgcsl0sRHhqtJ4dimtPbxKgM1txIOxgaT5rInwq2wPGFz27WIQIbaHC3NwWtPKjOD6r2nyNIgkT0qHwLDlmxGEZf+JcQhfC7YJePJsrLI5GmAa3e2+zC0o0P3539lNv296WF/r/tV/wDZzct38ChKIWtlkbujlqpM88pX60ooPDrP+mn9A/SkoIlozdvtCH/Tr/X/AOtMJ9oIAAOHBifv/wDrWmnhdj/Rt/0D9K8/wnD/AOjb/oX9KOiFRm5+0Mf9MP6//WurSP8ACcP/AKNv+hf0rqOiCjD8TeZ9p8K7G8Pu2godSCRmHPSn+z2FF28bbMAGEz5dK0vB8HtBZMuwTLLHNp7dqUptOkaRhHrbMr4Vdd3yJ61GnC+GlWzXGVgeXQ9aAsfafDYh0VoKsYP7p2o+w/DcR+zJdBD5lDFYggeHWnK2sGXWMZdmtEDtzlVbKrycnUawQedajgx3E/hX5ViPH8RItiSSHOhJMaHTXatuwXqJ/CvyoisFyfZ2SRQp2ctk4nHAGO+NffRWKGezH/y8d/GnyNWSXLYNyAGYEeWtC3b+1i1VLmHxFuzbT1y75CWnTUg59J7vzozxOIREZ3IVVEknkBWFdruPPjLjO2lu2SttRqPE/wAR5nyFJjK7HcexN1Al26XUHNBA31MyBJ3Oh091VjnTxp0WidToOk7/AKaUhwMwC6SdAdYpCtsbROZ3pd5opboBsSdt43jXbxqJcfXTUUD0TMNiFQy0HqDqOXXyqSsXG7iMTM9zYDpGwipPZjHW0BV0BJ5nn4eXKPGr+5xi2nqBQZ0GkAa8uuvy3rNvJ0RVxBtMK4BBsXTGuYI2k7SYiPdzqvdjqPIdKvcX2kuXAUV4U+tHPoPLWqW6gnQxzppkteh+7iDkXwO8fXvqHn3Hhp5/X51JV1K76/Wv10qHd9aBQhSfkSr6eNNnSvXeKQzfUVRmOhpBpNhNZPKkzpTuUgRz50DE37smPfXqDnSETvQeXWlodh4/KgQrEbCrnspxhsNiEvJBKgqVIPeDAiNPEA+yql0zRr5/p8q9s3CG5SORGnupDCztDxs466jvYtlURlOTVmDAgSx1IVmzARp7ao8a95Llq86MrkW3BdSM7W4GbUaggLMdT1p/DYjLo5BiSQpHd1J10MgtlgQQeZEzUnjmPuXsOiO5f0RLIxHeFtlhkJnvEEIeoHhFF+xln2O7Qtgnuqth7i3crKizICzBXQ5hlaNB90UR3ftQCGHwd1T4mPmopn7N7X7Qlm6YD4VbtqYkkOVZPAAKzjrpRtxt0VFzpnI10WY8atEvYHr9qlv/AKW97CtOJ9qmHJj9nvz07n/lRdw4IUZgFGu5Gg050I9usQypbXNacFmJKLBGVGI5nShKyXhhxw7Gi9aS6ohXUMAdwCJg+NdTPZ9MuFsL0toP/qK6mMG7nYWwpDW3dHXZgZ16nqPCpF9xYgurMxHrL6s7bcqip2gbEXmSwe4gkv1J5Dwqt7Rceu2tWAKnSB161DinklcrT6ldj+zhxeJzg5UMDMfDf21o+GsqiKg2UADyArIU7XXldWUAZeVatwjF+ltJciM6g++hKlQ5O3Zm/wBpWAS3fR109IcxHiNCflWs4L1E/hX5VnH2qBHSy4MujlT5MNRPmBWi8PEW0H7i/KqsSdkuhXs7rjMeJI7yajl3TrRSKDuH4xLGJ4hcuNCKbZ8SYMKOpJ0ApDG+1WGt2bRfFXHxbkkWrbhVQN+LIgAMAasTzgRmrJsVcZyHYQktlA2OusDQdNo5VadouMPib7XLjZV2VdwoGoUdeUzvM1V3MQCxYDuye6YGjHXaNdto6wIoGxksBJ+XX20myCjZm9YgxH3SZ3Hly31py7bBU75hrl6L1iNfE+XjTd0sT3gZAHrHXYATPgBSsKGmNRmbSnMQ3TnTZTc7QP0Hv/SgbEERqKUtsk/rXIeW9OIOnM70AWOFwaZZZwp/If7/AAqPiYDECIpkv135/D9KQTSopyxQoHxpLP7K8YcxTbvTIENXqivAKnYO0CpJpNlRjbEW7e1KuwTlHM/OlmJ05VGxBnXnQhywPLbIJGoM02rfM/nXtg6aVxJ186BEnDIGdVZioI3ABM8gJgCTHwNNKJY5fIw3xB0zSdQPKuVpMDVjAHmdI+MU5YTSZAAI1JYajkIGk6HXwoGP4dXIIVTlJOu2Uw3dmdiNIO/umywGK9JCEKe6VUuNxE5e6DlAEgajcc6g2byi2dAzvJbvEFFXYb5XGxjWMsRtSrFktbLhvVCiARMpP3BrED1uUa76AF99n+IaxjjZDBUvLHeB1y99Y6MO8JOm9a9iodYkT1msewxR7uHaCGWWbkVYgAglj3kMqwO+vTWjHhWFZ7yFM+UeuSYEdPGmsoMBDbxXokK5QyyefXl40Hdv8ej2VCoqmXMgdEIjbxo8VFWRpE6Cg37SEHo7agDVmG3UR+dXHRlJ/LAe8NWLVsdFUfAV1OW9AB4CuoGCPA+CHDI+mrEsfLkKDONYp8RiRbRWZQTOmmnjWmXL7jTKh6DPH5UMcV7VWsMyI1suSCSEI015k771PiiUql2Ad+HemeLQ73MbCa1Ls1Ze3hkS4QWRSDHht8KpcBxRMSyuiFI3BjSfLlRMbgCOeUGpeEkVKTk22jOO2pmwp63J981q2BH/AA0/gX5Csr7aD/Lp/GPka1bBeon8K/KqSpJGXFdZH4rF+2OLV8RdKHMhcExBBIAHs2jbmTsaPu23HzZT0Vv/AJtwGf3UgyZ2BMaeEnpWS4lmVpLLJIEc4HgwEAg6GI15RQbEN4ESJzCRPjpy5iCdf0pAQ5sk9Y03I/vp7a9BJgeyBz6HTz3ptlgDMCOY5agwTBEnYjltQIcuS3e59TJmNekbanrB66suxOp3P0acv7g58whdRpptBnWRtUd3qSxzAoGeCM0yoHiQYPTQ5dDv4b07dQFYhSxB1E6jrG+aY6DfTc0xh9FLQDOYRGomASOh1GvnrVpg+Gvfb1mAGxYzAOsActz79qTdDjBydIo2H6dK8D1c8V4E9scmA5j9KoTTTT0EouLpjubntXBqQG5V4TTJFs/KkV1KRaAJGEtBmirRrQRYqDw5CH8gasLtt3zBFLQrM0DZVBJY9AAN6h7N4JKNleYkzqAeU6gVCuAgweWnlVpatqUuM090LBHIsYB8QKgYdSXU9IOu0DrVGUjhcyiOZpSCR40jGEFyQAAeQ5a8vr9K52yiPCgQ9h3hiddNiCQc0QII2g6+yncskZdywjQgT1HIcqjYZe6xJ02ieZPl+fMVNQHcL6iGcqxAiJYjWWkgz4dYoBCWd5LEHvd3NHLYgeMCNNxSXQBQIIiN+c6SAY00Px8gu46CQQe7AgAKTAjMT1nl59ZpWNciAAAqnMBEwJAgzryiCNQAeYoGSOHXSwyOA4J3O47vdIBOwidBy8q1vsVxn01jK4y3bUI4MSSNn06wfaD4VjOYo0zBB2KwQQNWgcxG3M+0USdmcWPTJ3jZW8fQuwOYyYClp1zFsonT1ieYo8gng0DE8Yy4khCCv3wdtNyDyIqp7eYxHbDIhklx7iyr+dEOG7JW0nvsSd5A/ShrtZwlLWJwSJPeuJvG3pLZ5cq1dUZVcjSwK8pcV1IoyfiL5LbsNTqd6DsCudoMkk+dFGJ7V4BgV9EYPiaZsdoeHq0rZIIII1NK14MYxav7HOF3HViu2XnsfLxo7Z/8sWPNaDV7U4E65GBO+pq2xPazBmyio87SmsgVnJejeLbfyZSdsmnDp/GvyrQuI8WTDYdHaMzBVRT95yNJ6Dqf1rMOO4xcQgVCIDhjroqjmSag8f4/cvXDm0AyhQB6qj7p3IManWZmqzRKSWtHuJx73LuZnZg5JeT6x0ERsBAG/Q7aVU4hlhoKEZh3fvcyeWw1GnUdRS7CMVmHIMzl1iJnlIEEjpvTS2wXZSTM6B1DGQTox5NHLWZ8BQOxBBRg7LtMiSCdxIPMA9KjXLhY7zoeXxJjUmSZqbicRAVFJUqrCA876MpnRdFPsI3gEw79vUHYMoaBMQZP3h4Ec9qB0OYgg6rJJgknYE6kARpDTz6bUx6FnOVRJ/LrrtT11tFAAGg9p5/nUnhlsiWOx2HWP71EnSs1hDtKix4Vg4yggHKOQOrEzPnED61vhh0OuxgddD8xTPCLbhcxXunwnerUJmG4I+P61i22d0YxiqRWvmGh7w99DfFuDBpe1oeabe7pRhcwrDxqBiLY+8CDyNEZNMJQjJUzPYIkbciD9eFOWrefQGG+B/Q0R8V4YH7wgN1A38x+dDToyNBEEVvGSkjgnxuLyIKwSp0I3B0NP4dJOlGvZ7iOGdEW+4Vpgh7a3EkAnMM4OUQPy6UZHiPDwnduYCBpLWkGsTpC6mKqrIWGAnBOAXsR/wApCw5ue6i9Zc6ewSfCne0WKt2LZwlhszOR6a8NM2UyLa8wgMHxI16Ve8Y7cIB6JHLHK0EKLaAgEqu85SQOkSNOVZ3jMQXbOcoLAGBt0Jg7HefGalJI0c2xVy5lssPxuoOo+4GO251ca7VHwNuZlgs6AkCNwTM7aD40rF6W7a9S7RA5kKPH7h39nOVoAEKkAgGSQATmggAEcoIOvMe8Rm9ke+uoBI0nQD2+2mrkzBn29KU7nu+HLz1Pzp7DWw7gsNDOiwNl030iY+NUIftZBkUoSRJbXeQdgNo39lOIiggjupIJzEMYzaAiBPeXfY+FNXGPeYGSxBzREk6mD91hOtd6Re7AzbzJglegkaCJ6mkMWrg6gqWZl9aRoJ5DukE5SZ929Id107s94zJ5GIWRGxzHlv4UmdJA7uaYkA7jQRrsRv8ArTWYAnu7HY+wRB6RtHOgY9iMPk7pnNC6HlOp2J+jVnw1wUe2jMrNBkkAl0BICnYAHYb61VpbXKTrnMGOUbkkkzPsqRgCFc5myiJII6a5YAPQcvjQJH0FwPiIxGHt3h99QSJGjDRhppowIoW7YicfgF/fB9zA/lSPsnxebD3bZI7lyRHIOBoJ1iQTr1pXaIzxbAr0BPwc/lVeBeQ8rq9rqoQPXOyOBO+Fs/0Coz9jeH88NaH8sUB8R7aYt9nyDogj46mqLEY66/r3Hbzcn5mn1Zk5o1Rex3DTth7R8v7GlnsRgP8Apk+P61kVtnUhlYqRsQSDPmKJOGdrcXbmXziCYfWI8dDScaCM0yp7Z2rCYh7dhFS3bOQhSZZwJZtd4nKB4HrVEcSXbM5LE/r4cp5eNTse7klpkkszNpLMwJBnlpmJHgT0qAxMgKc8badYO3mPGpNGSLpWBK9TmkrptEjfpt13r2zYbK7qNc2XJ3pKuG103Eg6eGuhqFeeYObw26f71LwN9AhWCC0hs2mpEIQBuF1OvNhppNIpEJcwJ16A/L4H40+jMCIbNBEwTt0g7bfAVKXDgWiTkLLcECdcpGoM6kSAJG2bfUVCQwskQTPu/WkNIbJ76jfMQPOeVE+K4eEKjMrMVkqPumT3TyOgBEHY7ChbCODcDE7ajXnyj65CrdMasxmAjUksB7gTJPgKzmneDp4GldhrwC5CZHEj4irV8Ig1A9v+9Z9w/jjZwudUkxnb1VHU9elEVjEXQ0HEBp/dAn3Gssx2dVqTuLLooP8Aek3LQI5V7YDMO8QdPOlPa60WKqKvE8NWNBHlQ5xLhgO48jRxl5HWoOLwWbUb9Y+dNOtCa7KmZlicC6TpI6j86YGmpWRprPKfA78qO8TgzrInyqm9FkY5MoJBEE5WJjlEEbzMx8q1jKzl5OHrlFEwJ9XYcwIHQchrtr+ZpF0gHKN5MwZH1M6+VW2P4X3WZHmBLpOpE6GIE+tMjTXkd65bQQZSASwGuukw3PYgR7zV2YUR77yV/dWPiT+dSiIQJ+KWGvukew+/oahwc5iZ8KnYnTYbCBJ5bjkNd9edAEe4gIBOnKNeUameR19oqYpCqO6wOVYn7xnvA6aajT+GJ0qPedoCsWJU8zMDKoAHSMu3KlXL+rRrmOzDUAkHp1EeR8TQCOKMBEZZOomdApmOWx8xHKnbjhlJyKDJ9XkIgCM2hBB3HQ89Whb+8WAJBOqxqJ2O2usdI8gUdJMKQJiSATqZ8QN/KgBRRQATJB2grIjYETI3OkdOteWmnUwFG5jcHXLPM6/DzNKQDOCBKCNDIDHxg6EkExPIVLfJEu0AZgqSJnT722rSZPTxFADKW9dyNQAymDJ1A10HeG5Ok9a9vXwwAIBIAEjeF5HTTYmP3pOpNNXnIJVgFmeekgEDUb7g66yPOWheBBAHLmdzz8Ty08KAs1P7Hz3L4mIZCVO5kEZtuqmrDine41hR+FCf/rcoX+yzHKmKKE5RcRhvuwIcE+MBh76KGcPxtIIIWzuDzg/+VUtCew+rq8muqhHzsTTdy4RtXV1anIhDBiNWPsqZh7YRGMmcuY9YUiACfGDtr7NerqiejTj2IuSok690zqdsxBAAiJyxHQmodq2GlSTIEzv4EeR39grq6szcbxwAC5RAyjwJY94nTYAtAjkBSPR5GM65Try1MQRpoQa6upAXWJsF7b3dFKMimD0WDGkHUAgwP0HsdePvrq6kU9HcPtyGY7Q2ngBmPt0EeIqNc1nwrq6gENxVhg+K3EETI+NdXUpK0PjnJSwFHC+OPpvRLhuIlxtXV1c1Uz09oli5ypQxEECPD8q6uoEU/aPGCygME5jl6QDufPXwoVYw4tFUIf1e7yb1ZJkiCV2nY711dWkdHJzPJKGAKtcTNJtgkPrMiORkMO+BB5T7a+9g1ZPSL3RLT5qOQ5Anx5+/yurUxKzD25uSOq7+PsjenbSZlzSRJ18wJGldXUyRstMrOpaRpzmDrOgI8DtXuLTIwEkg5fj+W2ldXUwJVsDM1oiXY5QfugaEmN5Gw89ahqSxgEiAJjTQact9RMnw6V1dSYErDWgyl1JCLPdME6qSOUfd186bDiQIgNvGp003Ou4mPly6uoGM3u94DNAA66CSPKvdARA1An4GR4z18K6uoEWGAfIyn+LkNQRznn3D9TV0uIYnQkeWnyryurTj8mPN4HP25/8AUuf1H9a6urqsxP/Z"/>
          <h1 className="pt-2 pl-2 font-semibold  ">Buju Banton</h1>
          </div>
              <div className="flex  hover:bg-gray-200 transition delay-90 rounded-full px-2 py-1 cursor-pointer">
          <Avatar src="https://api.time.com/wp-content/uploads/2015/01/jon-jones.jpg"/>
          <h1 className="pt-2 pl-2 font-semibold  ">Jon Jones</h1>
          </div>
              <div className="flex  hover:bg-gray-200 transition delay-90 rounded-full px-2 py-1 cursor-pointer">
          <Avatar src="data:image/jpeg;base64,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"/>
          <h1 className="pt-2 pl-2 font-semibold  ">GSP</h1>
          </div>
              <div className="flex  hover:bg-gray-200 transition delay-90 rounded-full px-2 py-1 cursor-pointer">
          <Avatar src="https://scontent.flhr3-4.fna.fbcdn.net/v/t1.6435-9/54256140_10220194386076254_9036174014652874752_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lO3vAKAG-VQAX8ks29N&_nc_ht=scontent.flhr3-4.fna&oh=1b1232d29878aeaf711de3e9aca38def&oe=60D31B85"/>
          <h1 className="pt-2 pl-2 font-semibold  ">Yass Shariff</h1>
          </div>
              <div className="flex  hover:bg-gray-200 transition delay-90 rounded-full px-2 py-1 cursor-pointer">
          <Avatar src="https://scontent.flhr3-3.fna.fbcdn.net/v/t1.6435-9/198516518_10218960170982832_6052204744790778098_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=NuskxiFYx7wAX9BDNn6&_nc_ht=scontent.flhr3-3.fna&oh=43db58850d765e680195b51cb1ff12a2&oe=60D26E1D"/>
          <h1 className="pt-2 pl-2 font-semibold  ">Eddie Hutton</h1>
          </div>
          
         
          
          </div>

        </div>
        </div>
        
            
        </>
    )
}

export default Sidebar