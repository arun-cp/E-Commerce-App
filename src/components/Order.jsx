import "./Order.css";

export default function Order({close, cart}) {
    return (
        <div className="orderbg">
            <div className="orderbox">
                <h2>Place Order</h2>
                <label>Name :<br/>
                    <input type="text" />
                </label><br/>
                <label>Address :<br/>
                    <textarea />
                </label><br/>
                <label>Contact No :<br/>
                    <input type="text" />
                </label><br/>
                <div style={{ display : "flex" }}>
                    <label>State/Country :<br/>
                        <input type="text" />
                    </label>
                    <label>Postal Code :<br/>
                        <input type="text" />
                    </label>
                </div>
                <div className="odtail">
                    <button onClick={() => {
                        close(false);
                        cart(true);
                    }}>Back</button>
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    )

}