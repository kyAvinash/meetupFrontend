import React, { useState } from "react";

const AddEventsForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    type: "Both",
    thumbnail: "",
    description: "",
    topics: "",
    sessionTimings: [{ startTime: "", endTime: "" }],
    speakers: [{ name: "", bio: "", image: "" }],
    pricing: 0,
    venue: "",
    address: "",
    additionalInfo: [{ dressCode: "", ageRestriction: "" }],
    tags: [""],
  });

  const handleChange = (event, index) => {
    const { name, value, type } = event.target;
    const [mainKey, subKey] = name.split(".");

    setFormData((prevFormData) => {
      if (subKey) {
        // Handle nested objects
        return {
          ...prevFormData,
          [mainKey]: prevFormData[mainKey].map((item, i) =>
            i === index ? { ...item, [subKey]: value } : item
          ),
        };
      } else {
        // Handle root level keys
        return {
          ...prevFormData,
          [name]: type === "number" ? parseInt(value) : value,
        };
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://meet-up-bay.vercel.app/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        setSuccessMessage("Something went wrong, please try again later");
      }
      const data = await response.json();
      setSuccessMessage("Event added successfully.");
      window.location.reload();
    } catch (error) {
      setSuccessMessage("Please try again later");
    }
  };

  return (
    <>
      <h1 className="display-5">Welcome, Publish your event on our app.</h1>
      <form onSubmit={handleSubmit}>
        <div className="row container d-flex justify-content-center align-items-center py-2">
          {/* Title */}
          <div className="mb-3 col-md-8">
            <label htmlFor="title" className="form-label">
              1. Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          {/* Date */}
          <div className="mb-3 col-md-8">
            <label htmlFor="date" className="form-label">
              2. Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          {/* Type */}
          <div className="mb-3 col-md-8">
            <label htmlFor="type" className="form-label">
              3. Type
            </label>
            <select
              className="form-select"
              id="type"
              name="type"
              value={formData.type}
              onChange={(e) => handleChange(e)}
            >
              <option value="Both">Both</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          {/* Thumbnail */}
          <div className="mb-3 col-md-8">
            <label htmlFor="thumbnail" className="form-label">
              4. Thumbnail
            </label>
            <input
              type="text"
              className="form-control"
              id="thumbnail"
              placeholder="https://example.com/thumbnail.jpg"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-3 col-md-8">
            <label htmlFor="description" className="form-label">
              5. Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          {/* Topics */}
          <div className="mb-3 col-md-8">
            <label htmlFor="topics" className="form-label">
              6. Topics
            </label>
            <input
              type="text"
              className="form-control"
              id="topics"
              name="topics"
              value={formData.topics}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          {/* Session Timings */}
          <div className="bg-light py-3 col-md-8">
            <label htmlFor="sessionTime" className="form-label">
              7. Session Timings
            </label>
            <br />
            {formData.sessionTimings.map((timing, index) => (
              <div key={index}>
                <label htmlFor="st" className="form-label">
                  Start Time
                </label>
                <input
                  type="text"
                  id="st"
                  className="form-control"
                  placeholder="Tue Aug 15 2023 10:00:00 AM"
                  name="sessionTimings.startTime"
                  value={timing.startTime}
                  onChange={(e) => handleChange(e, index)}
                />
                <label htmlFor="et" className="form-label">
                  End Time
                </label>
                <input
                  type="text"
                  id="et"
                  className="form-control"
                  placeholder="Tue Aug 15 2023 12:00:00 PM"
                  name="sessionTimings.endTime"
                  value={timing.endTime}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            ))}
          </div>

          {/* Speakers */}
          <div className="bg-light mt-3 py-3 col-md-8">
            <label htmlFor="speakers" className="form-label">
              8. Speakers
            </label>
            <br />
            {formData.speakers.map((speaker, index) => (
              <div key={index}>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="speakers.name"
                  value={speaker.name}
                  onChange={(e) => handleChange(e, index)}
                />

                <label htmlFor="bio" className="form-label">
                  Bio
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bio"
                  name="speakers.bio"
                  value={speaker.bio}
                  onChange={(e) => handleChange(e, index)}
                />

                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="https://example.com/image.jpg"
                  name="speakers.image"
                  value={speaker.image}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-3 col-md-8">
            <label htmlFor="pricing" className="form-label">
              9. Pricing
            </label>
            <input
              type="number"
              className="form-control"
              id="pricing"
              name="pricing"
              value={formData.pricing}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* Venue */}
          <div className="mt-3 col-md-8">
            <label htmlFor="venue" className="form-label">
              10. Venue
            </label>
            <input
              type="text"
              className="form-control"
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* Address */}
          <div className="mt-3 col-md-8">
            <label htmlFor="address" className="form-label">
              11. Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* Additional Info */}
          <div className="bg-light mt-3 py-3 col-md-8">
            <label htmlFor="additionalInfo" className="form-label">
              12. Additional Info
            </label>
            <br />
            {formData.additionalInfo.map((info, index) => (
              <div key={index}>
                <label htmlFor="dc" className="form-label">
                  Dress Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="dc"
                  name="additionalInfo.dressCode"
                  value={info.dressCode}
                  onChange={(e) => handleChange(e, index)}
                />

                <label htmlFor="ar" className="form-label">
                  Age Restriction
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ar"
                  name="additionalInfo.ageRestriction"
                  value={info.ageRestriction}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-3 col-md-8">
            <label htmlFor="tags" className="form-label">
              13. Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              placeholder="marketing, sales, digital, etc"
              name="tags"
              value={formData.tags.join(", ")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  tags: e.target.value.split(", "),
                })
              }
            />
          </div>

          {/* Submit Button */}
          <div className="mt-3 col-md-8 mb-3 text-center">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="alert alert-success col-md-8">{successMessage}</div>
          )}
        </div>
      </form>
    </>
  );
};

export default AddEventsForm;
