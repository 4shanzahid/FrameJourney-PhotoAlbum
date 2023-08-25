import ImagesCard from "@/components/ImagesCard";
import { UploadButton } from "@/components/index";
import cloudinary from "cloudinary";

type SearchResult = {
  public_id: string;
};

async function Gallery() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(20)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <div className="flex flex-wrap gap-3">
          {results.resources.map((result) => (
            <ImagesCard
              key={result.public_id}
              src={result.public_id}
              alt="something"
              width={400}
              height={300}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
