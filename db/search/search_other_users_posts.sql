select post_id.id as post_id, title, content, img, profile_pic, date_created, upvotes, username as author_username from helo_posts post_id
join helo_users u on u.id = post_id.author_id
WHERE post_id.author_id = $2
where lower(title) like $1
order by date_created DESC;