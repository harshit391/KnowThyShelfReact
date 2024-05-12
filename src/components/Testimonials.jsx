import React from "react";
import '../App.css'

const Test = () => {
    return (
        <div id="canvas">


<div className="magazine-viewport">
	<div className="container1234">
		<div className="magazine">

			<div ignore="1" className="next-button"></div>

			<div ignore="1" className="previous-button"></div>
		</div>
	</div>
</div>


<div className="thumbnails">
	<div>
		<ul>
			<li className="i">
				<img src="pages/1-thumb.jpg" width="76" height="100" className="page-1"/>
				<span>1</span>
			</li>
			<li className="d">
				<img src="pages/2-thumb.jpg" width="76" height="100" className="page-2"/>
				<img src="pages/3-thumb.jpg" width="76" height="100" className="page-3"/>
				<span>2-3</span>
			</li>
			<li className="d">
				<img src="pages/4-thumb.jpg" width="76" height="100" className="page-4"/>
				<img src="pages/5-thumb.jpg" width="76" height="100" className="page-5"/>
				<span>4-5</span>
			</li>
			<li className="d">
				<img src="pages/6-thumb.jpg" width="76" height="100" className="page-6"/>
				<img src="pages/7-thumb.jpg" width="76" height="100" className="page-7"/>
				<span>6-7</span>
			</li>
			<li className="d">
				<img src="pages/8-thumb.jpg" width="76" height="100" className="page-8"/>
				<img src="pages/9-thumb.jpg" width="76" height="100" className="page-9"/>
				<span>8-9</span>
			</li>
			<li className="d">
				<img src="pages/10-thumb.jpg" width="76" height="100" className="page-10"/>
				<img src="pages/11-thumb.jpg" width="76" height="100" className="page-11"/>
				<span>10-11</span>
			</li>
			<li className="i">
				<img src="pages/12-thumb.jpg" width="76" height="100" className="page-12"/>
				<span>12</span>
			</li>
		</ul>
		</div>	
</div>


</div>

    )
}

export default Test;