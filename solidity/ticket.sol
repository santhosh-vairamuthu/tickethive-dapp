// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventBooking {
    struct Booking {
        address userAddress;
        string name;
        uint256 persons;
        string class;
    }
    mapping(uint256 => Booking) public bookings;
    uint256 public totalBookings;

    event BookingCreated(address indexed userAddress, uint256 indexed eventId, string name, uint256 persons, string class);

    function bookEvent(uint256 eventId, string memory name, uint256 persons, string memory class) public {
        require(persons > 0, "Persons must be greater than zero");
        require(bytes(name).length > 0, "Name cannot be empty");
        bookings[eventId] = Booking(msg.sender, name, persons, class);
        totalBookings++;
        emit BookingCreated(msg.sender, eventId, name, persons, class);
    }
    function fetch(uint256 id)public view returns(Booking memory){
        return bookings[id];
    }
    // Add other functions as needed, such as getter functions to retrieve booking details.
}