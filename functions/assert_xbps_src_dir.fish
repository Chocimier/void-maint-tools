function assert_xbps_src_dir
	function in_xbps_src_dir
		test -x xbps-src
		and test -d common
		and test -d srcpkgs
		or return 12
	end
	if not in_xbps_src_dir
		echo Not in void templates repository.
		exit $status
	end
end
