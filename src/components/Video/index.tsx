import { VideoWrapper, VideoTitle } from './style';

interface OEmbedData {
    url: string;
    oembed: {
        title?: string;
        author_name?: string;
        type: string;
        html: string; // This is the crucial one for dangerouslySetInnerHTML
        thumbnail_url?: string;
        provider_name: string;
        width: number;
        height: number;
    };
}

interface PubVideoProps {
    strapiVideoData: OEmbedData | null | undefined;
}

const PubVideo: React.FC<PubVideoProps> = ({ strapiVideoData }) => {
    const embedHtml = strapiVideoData?.oembed?.html;
    const title = strapiVideoData?.oembed?.title;

    if (!embedHtml) return null;

    return (
        <VideoWrapper $hasTitle={!!title}>
            <div
                className="iframe-container"
                dangerouslySetInnerHTML={{ __html: embedHtml }}
            />
            {title && <VideoTitle>{title}</VideoTitle>}
        </VideoWrapper>
    );
};

export default PubVideo;

