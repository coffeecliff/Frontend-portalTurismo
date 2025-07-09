import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-flip';

import mikuImg1 from "../assets/imagens/mikuImg1.png";
import mikuImg2 from "../assets/imagens/mikuImg2.png";
import mikuImg3 from "../assets/imagens/mikuImg3.png";
import mikuImg4 from "../assets/imagens/mikuImg4.png";

const images = [mikuImg1, mikuImg2, mikuImg3, mikuImg4];

export default function MikuSwiper() {
	const [swiperRef, setSwiperRef] = useState(null);

	const handleClick = () => {
		if (swiperRef) {
			swiperRef.slideNext();
		}
	};

	return (
		<div className="fixed bottom-4 right-4 w-40 h-40 z-50 cursor-pointer" onClick={handleClick}>
			<Swiper
				modules={[EffectFlip]}
				effect="flip"
				loop={true}
				onSwiper={(swiper) => setSwiperRef(swiper)}
				className="w-full h-full rounded-full overflow-hidden shadow-lg"
			>
				{images.map((img, index) => (
					<SwiperSlide key={index} className="relative">
						<img
							src={img}
							alt={`Imagem ${index + 1}`}
							className="w-full h-full object-cover rounded-4xl"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
