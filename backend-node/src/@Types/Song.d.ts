import { Playlist } from "./Playlist";
import { Privacy } from "./Privacy";
import { User } from "./User";

export type Song = {
    song_id: string;
    thumbnail: string;
    profile_id: string;
    privacy: Privacy;
    upload_by: User;
    title: string;
    description: string;
    genre: string;
    duration: string;
    likes_count: number;
    plays_count: number;
    comments_count: number;
    created_at: number;
    updated_at: number;
    url: string;
    song_playlist_id: string;
};

export type SongDTO = {
    song_id: string;
    title?: string;
    upload_by: User;
    url: string;
    thumbnail?: string;
    genre: string;
    description?: string;
    duration: string;
    created_at: number;
    updated_at: number;
    song_playlist_id: string;
};

export type EmptySong = {
    thumbnail: string;
    title: string;
    description: string;
    genre: string;
    duration: string;
    url: string;
    song_playlist_id: string;
    song_id: string;
};
