import Image from 'next/image';
import Link from 'next/link';

export interface GameItemProps {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
}

export default function GameItem(props: GameItemProps) {
  const {
    title, category, thumbnail, id,
  } = props;

  return (
    <div className="featured-game-card position-relative">
      <Link href={`/detail/${id}`}>
        <a>
          <div className="blur-sharp">
            <Image className="thumbnail" src={thumbnail} width={205} height={270} alt="" />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image src="/icon/console.svg" alt="console" width={54} height={36} />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>

    </div>
  );
}