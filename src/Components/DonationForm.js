function DonationForm({donations}) {
  return (
    <section className="donation">
    <h3>You could be donation <span className="secondary">#{donations.length + 1}!</span></h3>
    <form>
      <label htmlFor="name"
      >Name
      <input
      id="name"
      name="name"
      type="text"
      placeholder="Yor name...">
      </input>
      </label>
      <label htmlFor="caption">
        Caption
        <input
        id="caption" 
        name="caption" 
        type="text"
        placeholder="Add a brief message ..."
        ></input>
      </label>
      <label  htmlFor="amount">
        Amount
        <input 
        id="amount"
        name="amount"
        type="number"
        placeholder="0"
        ></input>
      </label>
      <button>Donate!</button>
    </form>
    </section>
  )
}

export default DonationForm