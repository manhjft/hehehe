function Header() {
  return (
    <header className="bg-orange-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">FPT Aptech</h1>
      <nav>
        <button className="px-3">About Us</button>
        <button className="px-3">Products</button>
        <button className="px-3">Booking</button>
        <button className="px-3">Locations</button>
      </nav>
    </header>
  );
}

export default Header;
