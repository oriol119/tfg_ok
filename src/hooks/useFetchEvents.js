import { useEffect, useState } from "react"

export const useFetchEvents = () => {

    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchEvents()
    })

    const fetchEvents = async () => {
        try {
            const response = await fetch("http://localhost:5000", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: `{
                        order {
                            id current_state customer_id  line_items creation last_update
                              }
                        }`
                  }),
            }).then(response => response.json())

            setEvents(response.data);
            setIsLoading(false);
        } catch (error) {
            setIsError(true);
            setError(error);
        }
    }

    return { events, isLoading, isError, error };

}