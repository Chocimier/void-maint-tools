function distribute_args -a first_set -a second_set
	set -l before_dashes
	set -l after_dashes
	set -l seen_dashes
	for arg in $argv[3..-1]
		if test "$seen_dashes"
			set after_dashes $after_dashes "$arg"
		else if test "$arg" = "--"
			set seen_dashes 1
		else
			set before_dashes $before_dashes "$arg"
		end
	end
	if test "$seen_dashes"
		set -g $first_set $before_dashes
		set -g $second_set $after_dashes
	else
		set -g $second_set $before_dashes
	end
end
