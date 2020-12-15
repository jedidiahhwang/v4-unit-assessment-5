select helo_posts.id as post_id, title, content, img, profile_pic, date_created, upvotes, helo_posts.username as author_username from helo_posts
join helo_users u on u.id = helo_posts.author_id
where lower(title) like $1
order by date_created asc;