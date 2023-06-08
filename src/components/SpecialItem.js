export default function SpecialItem(props) {
	let item = props.itemData;
	return (
		<article className="special-item">
			<img src={item.image} alt="special"/>
			<div className="special-item-content">
				<p className="card-title">{item.title} <span className="card-title price">${item.price}</span></p>
				<p className="p-text">{item.description}</p>
				<p className="highlight-text">Order & Delivery: +$1</p>
			</div>
		</article>
	)
}