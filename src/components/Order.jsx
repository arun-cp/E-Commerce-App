import "./Order.css";

export default function Order({close, cart}) {
    return (
        <div className="orderbg">
            <div className="orderbox">
                <h2>Place Order</h2>
                <hr/>
                <form>
                    <label>Name :<br/>
                        <input type="text" required />
                    </label><br/>
                    <label>Address :<br/>
                        <textarea required />
                    </label><br/>
                    <label>Contact No :<br/>
                        <input type="text" required/>
                    </label><br/>
                    <div style={{ display : "flex" }}>
                        <label>State/Country :<br/>
                            <input type="text" required/>
                        </label>
                        <label>Postal Code :<br/>
                            <input type="text" required/>
                        </label>
                    </div>
                    <div className="odtail">
                        <button type="submit" onClick={() => {
                            close(false);
                            cart(true);
                        }}>Back</button>
                        <button>Place Order</button>
                    </div>
                </form>
            </div>
        </div>
    )

}