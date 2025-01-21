const STRAPI_URL = process.env.STRAPI_URL
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN

export async function getAllProjects() {
    if (!STRAPI_URL || !STRAPI_API_TOKEN) {
        console.error("Strapi URL or API Token is not set")
        return { data: [], error: "Configuration error" }
    }

    try {
        const response = await fetch(`${STRAPI_URL}/api/projects?populate=*`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            },
            next: {
                revalidate: 3600,
            },
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch projects: ${response.status}`)
        }

        const result = await response.json()
        return { data: result.data || [], error: null }
    } catch (error) {
        console.error("Error fetching projects:", error)
        return { data: [], error: "Failed to load projects" }
    }
}


